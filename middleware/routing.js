import { checkLinkColor } from '@/assets/js/transition/nav'

export default function (context) {
  checkLinkColor(context.route.name)
}
