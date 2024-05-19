import {useRouter} from 'next/router'

function DetailPage(){
    const router = useRouter();

    router.query.newsId
    return <h1>Details Page</h1>
}

export default DetailPage;