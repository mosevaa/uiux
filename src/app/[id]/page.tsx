import FilmPage from '@/components/filmPage/FilmPage'

interface Props {
  params: {
    id: string
  }
}

export default function Film({ params: { id } }: Props) {
  return <FilmPage id={id}></FilmPage>
}
