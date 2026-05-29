import { use } from 'react'

export default function Page({ params }: { params: Promise<{ id: number }> }) {
    const { id } = use(params)

    return <div>글 수정 페이지: {id}</div>
}
