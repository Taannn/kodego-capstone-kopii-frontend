import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { reasonInput } from "./cancelReasonSlice";

const CancelReasons:React.FC = () => {
  const cancel = useAppSelector((state) => state.cancelReasonOrder);
  const dispatch = useAppDispatch();

  const handleReason = (value: string) => {
    dispatch(reasonInput(value));
  }

  return (
    <>
      <div className="form-check d-flex justify-content-start mb-2">
        <input
          className="form-check-input me-2 border-2 bg-secondary border-light"
          id="option1"
          type="checkbox"
          value="changed of mind"
          checked={cancel.reason === "change of mind"}
          onChange={() => handleReason("change of mind")}
          />
        <label className="form-check-label fw-medium" htmlFor="option1">
          Changed mind about my purchase
        </label>
      </div>
      <div className="form-check d-flex justify-content-start mb-2">
        <input
          className="form-check-input me-2 border-2 bg-secondary border-light"
          id="option2"
          type="checkbox"
          value="found a better deal"
          checked={cancel.reason === "found a better deal"}
          onChange={() => handleReason("found a better deal")}
          />
        <label className="form-check-label fw-medium" htmlFor="option2">
          Found a better deal elsewhere
        </label>
      </div>
      <div className="form-check d-flex justify-content-start mb-2">
        <input
          className="form-check-input me-2 border-2 bg-secondary border-light"
          id="option3"
          type="checkbox"
          value="product no longer needed"
          checked={cancel.reason === "product no longer needed"}
          onChange={() => handleReason("product no longer needed")}
          />
        <label className="form-check-label fw-medium" htmlFor="option3">
          Product no longer needed
        </label>
      </div>
      <div className="form-check d-flex justify-content-start mb-2">
        <input
          className="form-check-input me-2 border-2 bg-secondary border-light"
          id="option4"
          type="checkbox"
          value="personal reasons"
          checked={cancel.reason === "personal reasons"}
          onChange={() => handleReason("personal reasons")}
          />
        <label className="form-check-label fw-medium" htmlFor="option4">
          Personal reasons or unexpected circumstances
        </label>
      </div>
      <div className="form-check d-flex justify-content-start mb-2">
        <input
          className="form-check-input me-2 border-2 bg-secondary border-light"
          id="option5"
          type="checkbox"
          value="dissatisfied with shipping time"
          checked={cancel.reason === "dissatisfied with shipping time"}
          onChange={() => handleReason("dissatisfied with shipping time")}
          />
        <label className="form-check-label fw-medium" htmlFor="option5">
          Dissatisfied with estimated shipping time
        </label>
      </div>
      <div className="form-check d-flex justify-content-start mb-2">
        <input
          className="form-check-input me-2 border-2 bg-secondary border-light"
          id="option6"
          type="checkbox"
          value="duplicate order"
          checked={cancel.reason === "duplicate order"}
          onChange={() => handleReason("duplicate order")}
          />
        <label className="form-check-label fw-medium" htmlFor="option6">
          Accidentally ordered twice
        </label>
      </div>
    </>
  )
}

export default CancelReasons