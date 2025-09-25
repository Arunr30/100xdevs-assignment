export default async function Details({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    console.log(slug)
    return <div>product details</div>
}
