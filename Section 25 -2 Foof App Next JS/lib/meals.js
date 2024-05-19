import sql from 'better-sqlite3'
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs'
import { Buffer } from 'node:buffer';
import { S3 } from '@aws-sdk/client-s3';

const s3 = new S3({
    region: 'us-east-1'
  });

const db = sql('meals.db');

export async function getMeals(){
    await new Promise((resolve)=> setTimeout(resolve,5000));

    //throw new Error('Loading Meals failed');
   return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug){
    
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal){
    meal.slug = slugify(meal.title,{lower: true});
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`

   
   const bufferedImage = await meal.image.arrayBuffer();

  await s3.putObject({
    Bucket: 'dulanjali-nextjs-demo-users-image',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

   meal.image = fileName;

   db.prepare(`
   INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
    )
   `).run(meal)
}