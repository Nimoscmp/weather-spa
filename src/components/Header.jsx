import { useDispatch, useSelector } from "react-redux";
import { select_dark_theme_action , select_language_eng_action, select_language_spa_action, select_light_theme_action} from "../redux/actions/";

const Header = () => {
    //  Dispatch
    const dispatch = useDispatch();
    //  Global states
    const dark = useSelector(state => state.theme);
    const english = useSelector(state => state.lang);

    const handleThemeClick = () => {
        if (dark) {
            dispatch(select_light_theme_action());
        } else {
            dispatch(select_dark_theme_action());
        }
    }

    const handleLangClick = lang => {
        if (lang === 'eng') {
            dispatch(select_language_eng_action());
        } else {
            dispatch(select_language_spa_action());
        }
    }

    return (
    <>
        <header className={dark ? "header bg-dark trans-300" : "header trans-300"}>
            <nav className="nav">
                <div className={dark ? "language color-light-gray" : "language color-gray"}>
                    <span 
                        className={english && dark? "pointer color-light fw-600" : english && !dark ? "pointer color-dark fw-600" : "pointer"}
                        onClick={() => handleLangClick('eng')}
                        >ENG</span>
                    <span>|</span>
                    <span 
                        className={!english && dark? "pointer color-light fw-600" : !english && !dark ? "pointer color-dark fw-600" : "pointer"}
                        onClick={() => handleLangClick('spa')}
                        >ESP</span>
                </div>
                <div className="theme">
                    <i 
                        className={dark ? "fas fa-adjust fa-2x trans-300 pointer rotate-180 color-light" : "fas fa-adjust fa-2x trans-300 pointer"}
                        onClick={handleThemeClick}
                        ></i>
                </div>
            </nav>
        </header>
    </>
    )
}

export default Header;
