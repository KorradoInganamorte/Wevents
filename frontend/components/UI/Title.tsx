import { montserratBold } from '@/public/fonts'
type TitleProps = {
    name: string
}

const Title = ({ name }: TitleProps) => {
  return (
    <h2 className={`${montserratBold.className} text-8xl text-blue mb-[2.5rem]`}>{name}</h2>
  )
}

export default Title