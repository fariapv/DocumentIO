import { ClipboardText, Files, HouseLine, SignOut } from "phosphor-react";
export default function Header() {
  return (
    <div className="h-10 bg-gray-800 text-gray-100 flex items-center justify-center px-4 border-b border-b-gray-700">
      {/* Header Content */}

      <div className="w-[1120px] flex items-center h-full">
        {/* Logo */}
        <span className="flex items-center gap-2 flex-row font-bold">
          <ClipboardText size={24} weight="bold"></ClipboardText>
          DocumentIO
        </span>
        {/* Nav Buttons */}
        <nav className="ml-auto flex items-center h-full gap-6">
          <a
            href="/"
            className={`flex gap-2 items-center bg-gray-600 h-full px-2`}
          >
            <HouseLine size={18} weight="bold"></HouseLine>
            Home
          </a>
          <a href="/docs" className="flex gap-2 items-center ">
            <Files size={18} weight="bold"></Files>
            Docs
          </a>
        </nav>
        {/* Actions Buttons */}
        <div className="ml-auto">
          <button type="button">
            <SignOut size={18} weight="bold"></SignOut>
          </button>
        </div>
      </div>
    </div>
  );
}
