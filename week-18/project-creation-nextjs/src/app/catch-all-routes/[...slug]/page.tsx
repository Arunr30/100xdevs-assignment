export default async function ProductFiler({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    console.log(slug)

    return (
        <>
            <h1>product filter page</h1>
        </>
    )
}
