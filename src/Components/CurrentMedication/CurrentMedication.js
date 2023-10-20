import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function CurrentMedication() {
  const [medications, setMedications] = useState([]);
  const [name, setName] = useState("");
  const [dose, setDose] = useState("");
  const [freq, setFreq] = useState("");

  const handleAdd = () => {
    if (name && dose && freq) {
      setMedications([...medications, { name, dose, freq }]);
      setName("");
      setDose("");
      setFreq("");
    }
  };

  return (
    <div>
      <h2>Current Medication</h2>
      <div>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Dose"
          value={dose}
          onChange={(e) => setDose(e.target.value)}
        />
        <TextField
          label="Frequency"
          value={freq}
          onChange={(e) => setFreq(e.target.value)}
        />
        <Button variant="fill" color="success" onClick={handleAdd}>
          Add
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {medications.map((medication, index) => (
              <TableRow key={index}>
                <TableCell>{medication.name}</TableCell>
                <TableCell>{medication.dose}</TableCell>
                <TableCell>{medication.freq}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CurrentMedication;
