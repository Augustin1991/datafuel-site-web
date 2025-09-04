
import Link from "next/link"
import Image from "next/image"

export function StoreButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href="https://apps.apple.com/app/id0000000000"
        className="inline-flex items-center border rounded-lg px-3 py-2 hover:bg-muted"
      >
        <Image src="/apple-touch-icon.png" alt="iOS" width={20} height={20} className="mr-2" />
        <span>Télécharger iOS</span>
      </Link>
      <Link
        href="https://play.google.com/store/apps/details?id=com.datafuel.app"
        className="inline-flex items-center border rounded-lg px-3 py-2 hover:bg-muted"
      >
        <Image src="/favicon-32x32.png" alt="Android" width={20} height={20} className="mr-2" />
        <span>Télécharger Android</span>
      </Link>
    </div>
  )
}
