import Accordian from '../../components/Accordian';
import './BasicPage.css'
import Examples from "./Examples";

export default function BasicPage() {
    return (
        <>
            <section id='basic-page-main'>
                <h1>Basic Page for Practice</h1>
                <div className="examples-main">
                    <Examples />
                </div>
                <div id="bP-accordian">
                    <Accordian />
                </div>
            </section>
        </>
    )
}