export type ColorTheme = 'red' | 'blue' | 'green'

export const COLORS: ColorTheme[] = ['red', 'blue', 'green']

export const getSidebarBackground = (color: ColorTheme) => {
  switch (color) {
    case 'red':
      return "url('/side-bar-red.jpg')"
    case 'blue':
      return "url('/side-bar-blue.jpg')"
    case 'green':
      return "url('/side-bar-green.jpg')"
    default:
      return "url('/side-bar-red.jpg')"
  }
}

export const getTitleColor = (color: ColorTheme) => {
  switch (color) {
    case 'red':
      return "-webkit-radial-gradient(rgb(200, 50, 50), rgb(100, 75, 75))"
    case 'blue':
      return "-webkit-radial-gradient(rgb(50, 50, 200), rgb(75, 75, 100))"
    case 'green':
      return "-webkit-radial-gradient(rgb(50, 125, 50), rgb(50, 75, 50))"
    default:
      return "-webkit-radial-gradient(rgb(200, 50, 50), rgb(100, 75, 75))"
  }
}