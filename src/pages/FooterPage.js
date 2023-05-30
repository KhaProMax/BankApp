import Icon from "../img/icon.png";

function FooterPage() {
    return <div className="flex flex-col justify-center items-center h-80 bg-custom-gray border border-x-0 border-b-0 border-t-slate-600">
        <ul className="flex mb-8 gap-5 text-sm text-slate-300">
            <li><button>About</button></li>
            <li><button>Pricing</button></li>
            <li><button>Terms of Use</button></li>
            <li><button>Privacy Policy</button></li>
            <li><button>Careers</button></li>
            <li><button>Blog</button></li>
            <li><button>Contact Us</button></li>
        </ul>
        <div></div>
        <img src={Icon} alt="logo" className="w-8 text-white mb-8"/>
        <p className="text-xs text-slate-400 font-light text-center">Originally built using VanillaJS by <span className="text-slate-100">Jonas Schmedtmann</span>. Re-built using React by <span className="text-slate-100">Kha</span>.</p>
        <p className="text-xs text-slate-400 font-light text-center">&copy; Copyright by <span className="text-slate-100">Jonas Schmedtmann</span>. Use for learning or your portfolio.</p>
    </div>
}

export default FooterPage;