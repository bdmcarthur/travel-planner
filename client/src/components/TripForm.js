import React from "./node_modules/react";

const TripForm = () => {
  return (
    <form>
      <div class="form-group row">
        <label for="inputTitle3" class="col-sm-2 col-form-label">
          Title
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputTitle3"
            placeholder="Title"
          ></input>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputDescription3" class="col-sm-2 col-form-label">
          Description
        </label>
        <div class="col-sm-10">
          <textarea
            rows="3"
            class="form-control"
            id="inputDescription3"
            placeholder="Description"
          ></textarea>
        </div>
      </div>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              ></input>
              <label class="form-check-label" for="gridRadios1">
                First radio
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              ></input>
              <label class="form-check-label" for="gridRadios2">
                Second radio
              </label>
            </div>
            <div class="form-check disabled">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                value="option3"
                disabled
              ></input>
            </div>
          </div>
        </div>
      </fieldset>
      <div class="form-group row">
        <div class="col-sm-2">Checkbox</div>
        <div class="col-sm-10">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="gridCheck1"
            ></input>
            <label class="form-check-label" for="gridCheck1">
              Example checkbox
            </label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
};

export default TripForm;
