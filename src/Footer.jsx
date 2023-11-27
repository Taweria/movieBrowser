import { Link } from "react-router-dom";

export default function Footer() {

    return (
      <div className="Footer">
        <button className={"Footer-btn " + (window.location.pathname == "/" ? "active" : "")}> <Link to="/"><svg className="Home-svg" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b_82_225)"><path fillRule="evenodd" clipRule="evenodd" d="M9.66724 25.4391V21.4464C9.66722 20.4309 10.4951 19.6057 11.5209 19.5989H15.2784C16.3091 19.5989 17.1446 20.426 17.1446 21.4464V25.4515C17.1444 26.3137 17.8395 27.0184 18.7102 27.0386H21.2152C23.7124 27.0386 25.7367 25.0346 25.7367 22.5624V11.2043C25.7234 10.2318 25.2621 9.3185 24.4842 8.72441L15.9172 1.89222C14.4163 0.702595 12.2828 0.702595 10.782 1.89222L2.25249 8.73681C1.47164 9.32849 1.00962 10.2433 1 11.2167V22.5624C1 25.0346 3.02434 27.0386 5.5215 27.0386H8.02648C8.91881 27.0386 9.64219 26.3225 9.64219 25.4391" fill="currentColor"/><path d="M9.66724 25.4391V21.4464C9.66722 20.4309 10.4951 19.6057 11.5209 19.5989H15.2784C16.3091 19.5989 17.1446 20.426 17.1446 21.4464V21.4464V25.4515C17.1444 26.3137 17.8395 27.0184 18.7102 27.0386H21.2152C23.7124 27.0386 25.7367 25.0346 25.7367 22.5624V22.5624V11.2043C25.7234 10.2318 25.2621 9.3185 24.4842 8.72441L15.9172 1.89222C14.4163 0.702595 12.2828 0.702595 10.782 1.89222L2.25249 8.73681C1.47164 9.32849 1.00962 10.2433 1 11.2167V22.5624C1 25.0346 3.02434 27.0386 5.5215 27.0386H8.02648C8.91881 27.0386 9.64219 26.3225 9.64219 25.4391V25.4391" stroke="url(#paint1_linear_82_225)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></g><defs><filter id="filter0_b_82_225" x="-4.56" y="-4.56" width="35.8568" height="37.1587" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.405"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_82_225"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_82_225" result="shape"/></filter><linearGradient id="paint0_linear_82_225" x1="15.1895" y1="15.763" x2="-6.95935" y2="25.9938" gradientUnits="userSpaceOnUse"><stop stopColor="#FF8F71"/><stop offset="1" stopColor="#EF2D1A"/></linearGradient><linearGradient id="paint1_linear_82_225" x1="4.93768" y1="4.03354" x2="21.7068" y2="23.7641" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity="0.25"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient></defs></svg></Link> </button>
        <button className={"Footer-btn " + (window.location.pathname == "/Search" ? "active" : "")}> <Link to="/Search"><svg className="Search-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0057 8.80503H9.37336L9.14923 8.58891C9.93368 7.67639 10.4059 6.49171 10.4059 5.20297C10.4059 2.32933 8.07662 0 5.20297 0C2.32933 0 0 2.32933 0 5.20297C0 8.07662 2.32933 10.4059 5.20297 10.4059C6.49171 10.4059 7.67639 9.93368 8.58891 9.14923L8.80503 9.37336V10.0057L12.8073 14L14 12.8073L10.0057 8.80503ZM5.20297 8.80503C3.20983 8.80503 1.60091 7.19611 1.60091 5.20297C1.60091 3.20983 3.20983 1.60091 5.20297 1.60091C7.19611 1.60091 8.80503 3.20983 8.80503 5.20297C8.80503 7.19611 7.19611 8.80503 5.20297 8.80503Z" fill="#D9D9D9" fillOpacity="0.41"/></svg></Link> </button>
        <button className={"Footer-btn " + (window.location.pathname == "/Profile" ? "active" : "")}> <Link to="/Profile"> <svg x="0px" y="0px" viewBox="0 0 23 28" enableBackground="new 0 0 23 28"><g><g><path fill="paint0_linear_82_225" stroke="url(#SVGID_00000054242683237206195240000007544085559619365808_)" strokeWidth="1.0132" d="M17.3,7c0,1.8-0.6,3.3-1.9,4.5c-1.2,1.2-2.8,1.9-4.5,1.9c-1.8,0-3.3-0.6-4.5-1.9C5.2,10.2,4.6,8.7,4.6,7c0-1.8,0.6-3.3,1.9-4.5S9.2,0.6,11,0.6c1.8,0,3.3,0.6,4.5,1.9C16.7,3.7,17.3,5.2,17.3,7z"/></g><g><path fill="paint0_linear_82_225" fillOpacity="1" d="M22.1,22.5c0,1.4-0.4,2.5-1.3,3.4c-0.9,0.8-2,1.2-3.4,1.2H4.7c-1.4,0-2.5-0.4-3.4-1.2c-0.9-0.8-1.3-2-1.3-3.4C0,22,0,21.5,0,21c0-0.5,0.1-1.1,0.2-1.7c0.1-0.6,0.2-1.2,0.4-1.7C0.8,17,1.1,16.5,1.4,16c0.3-0.5,0.7-1,1-1.4c0.4-0.4,0.9-0.7,1.5-1c0.6-0.2,1.2-0.3,1.9-0.3c0.3,0,0.5,0.1,1,0.4C7.2,14,7.6,14.2,8,14.5c0.3,0.2,0.8,0.4,1.4,0.6c0.5,0.2,1,0.3,1.5,0.3c0.1,0,0.2,0,0.2,0c0.5,0,1-0.1,1.6-0.2c0,0,0.1,0,0.2,0c0.6-0.2,1.1-0.4,1.4-0.6c0.4-0.3,0.8-0.5,1.1-0.7c0.5-0.3,0.8-0.4,1-0.4c0.7,0,1.3,0.1,1.9,0.3c0.6,0.2,1.1,0.6,1.5,1c0.4,0.4,0.8,0.8,1.1,1.4c0.3,0.5,0.5,1,0.7,1.6c0.2,0.5,0.3,1.1,0.4,1.7c0.1,0.6,0.2,1.2,0.2,1.7C22.1,21.5,22.1,22,22.1,22.5z"/></g></g></svg></Link> </button></div>
    );
}