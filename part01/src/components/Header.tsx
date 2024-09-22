import { FC } from 'react'

interface HeaderProps {
  course: string;
}

const Header: FC<HeaderProps> = ({ course }) => {
  return (
    <header>
      <h1>{course}</h1>
    </header>
  )
}

export default Header;