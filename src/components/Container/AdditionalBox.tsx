import ClockBox from "./ClockBox";
import { AdditionBox } from "../Presenter/AdditionBoxPresenter";

function AdditionalBox() {
    return (
        <AdditionBox>
            <ClockBox />
        </AdditionBox>
    )
}

export default AdditionalBox;