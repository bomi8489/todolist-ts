import ClockBox from "./ClockBox";
import { AdditionBox } from "../Presenter/AdditionBoxPresenter";

// 날씨는 보류
function AdditionalBox() {
    return (
        <AdditionBox>
            <ClockBox />
        </AdditionBox>
    )
}

export default AdditionalBox;