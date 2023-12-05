export const generateInitials = (text: string) => {
  const textArr = text.toUpperCase().split(' ')

  let initials = ''
  switch (textArr.length) {
    case 1:
      initials = textArr[0][0]
      break

    default:
      initials = textArr
        .slice(0, 2)
        .map((text) => text[0])
        .join('')
      break
  }

  return initials
}
