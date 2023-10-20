import React from "react";
import "./Details.css";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Switch } from "antd";

function Details() {
  return (
    <div className="container">
      <div className="first-div">
        <div className="first-div-1">
          <h3>Demographics</h3>
          <div className="first-div-1-1">
            <div className="form-field">
              <label htmlFor="initials">Initials</label>
              <input name="initials" />
            </div>
            {/* ... Other fields ... */}
          </div>
          <div className="first-div-1-2">
            <div className="form-field">
              <label htmlFor="state">State</label>
              <input name="state" />
            </div>
            <div className="form-field">
              <label htmlFor="city">City</label>
              <input name="city" />
            </div>
          </div>
        </div>
      </div>
      <div className="second-div">
        <h3>Lifestyle Factors</h3>
        <div className="factor-options">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography>Alcohol Consumption</Typography>
            <Switch defaultChecked />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography>Tobacco Consumption</Typography>
            <Switch defaultChecked />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography>Smoking</Typography>
            <Switch defaultChecked />
          </Stack>
        </div>
      </div>
      <div className="third-div">
        <h3>Diagnosis: </h3>
        <div className="third-div-first">
          <p>Age at the time of diagnosis</p>
          <div className="form-field">
            <label htmlFor="months">Months</label>
            <input name="months" />
          </div>
          <div className="form-field">
            <label htmlFor="years">Years</label>
            <input name="years" />
          </div>
        </div>
        <div className="third-div-second">
          <p>Duration of diagnosis</p>
          <div className="form-field">
            <label htmlFor="months">Months</label>
            <input name="months" />
          </div>
          <div className="form-field">
            <label htmlFor="years">Years</label>
            <input name="years" />
          </div>
        </div>
      </div>
      <div className="fourth-div">
        <h3>Conditions</h3>
        <div className="conditions-options">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography>Hypertension</Typography>
            <Switch defaultChecked />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography>CAD</Typography>
            <Switch defaultChecked />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography>Heart Failure</Typography>
            <Switch defaultChecked />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography>Albuminuria</Typography>
            <Switch defaultChecked />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography>Dyslipidemia</Typography>
            <Switch defaultChecked />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Details;
