import { useSelector } from "react-redux";
const Title = ({ data }) => {
  const input = useSelector((state) => state.input.value);
  const font = useSelector((state) => state.font.value);
  const capitalizedTitle = input.charAt(0).toUpperCase() + input.slice(1);
  const pronunciation = data.hwi.prs ? data.hwi.prs[0].mw : data.hwi.hw;
  return (
    <div className="title">
      <div className="title__text">
        <p className={`title__main-${font}`}>{capitalizedTitle}</p>
        <p className="title__pronunciation">{pronunciation}</p>
      </div>
    </div>
  );
};
export default Title;
