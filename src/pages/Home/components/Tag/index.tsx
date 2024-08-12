import { TagContainer } from './styles'

export interface TagProps {
  tagName: string
}

export function Tag({ tagName }: TagProps) {
  return <TagContainer>{tagName}</TagContainer>
}
