import React, { useState } from "react";
import UCSelect from "../ui/select";
import UCDate from "../ui/date";
import UCInput from "../ui/input";
import UCButton from "../ui/button";
import { register } from "@/lib/actions";

interface Props {
  handleSubmit: (data: any) => void;
}
  
const AddTask: React.FC<Props> = ({ handleSubmit }) => {
  const [taskData, setTaskData] = useState({
    taskId: "",
    description: "",
    tasktype: "",
    startDate: "",
    endDate: "",
    estimate: "",
    assignedTo: "",
    createdBy: " ",
    status: "assigned",
  });
 
  /* const handleChange = (e: any) => {
    const formData = { ...taskData, [e.target.name]: e.target.value };
    setTaskData(formData);
   
  }; */

  /* const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate if description field is empty
    if (!taskData.description.trim()) {
      alert("Description field is required!");
      return;
    }

    // Proceed with form submission if all validations pass
    handleSubmit(taskData);
  }; */


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate if description field is empty
    if (!taskData.description.trim()) {
      alert("Description field is required!");
      return;
    }

    /* // Set createdBy field to the value of the name field from registration
    const formData = new FormData(e.currentTarget);
    const result = await register(undefined, formData);
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      createdBy: result.name || "", // Assign name if it exists, otherwise assign an empty string
    })); */

    // Proceed with form submission if all validations pass
    handleSubmit(taskData);
  };

  
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-12 gap-1">
          <div className="grow">
            <UCInput
              label="Task Id"
              type="text"
              className="w-full"
              placeholder="Task id"
              name="taskId"
              value={taskData.taskId}
              onChange={handleChange}
            ></UCInput>
          </div>
          <div className="col-span-2 required">
          <UCInput
            //label="Description <span class="text-red-500">*</span>"
            label="Description"
            className="w-full"
            placeholder="Description"
            name="description"
            value={taskData.description}
            onChange={handleChange}
            required // Add required prop here
          ></UCInput>
          </div>
          <div className="col-span-2">
            <UCSelect
              options={[
                "Select",
                "Analysis",
                "Implementation",
                "Testing",
                "Review",
                "Deployment",
                "Documentation",
                "Self-learning",
                "Org Activity",
              ]}
              label="Task Type"
              name="tasktype"
              value={taskData.tasktype}
              onChange={handleChange}
            ></UCSelect>
          </div>
          <div className="col-span-2">
            <UCDate
              label="Start Date"
              className="outline-none"
              name="startDate"
              value={taskData.startDate}
              onChange={handleChange}
            ></UCDate>
          </div>
          <div className="col-span-2">
            <UCDate
              label="End Date"
              className="outline-none"
              name="endDate"
              value={taskData.endDate}
              onChange={handleChange}
            ></UCDate>
          </div>
          <UCInput
            label="Estimate"
            className="w-full"
            name="estimate"
            value={taskData.estimate}
            onChange={handleChange}
          ></UCInput>
          <div className="col-span-2">
            <UCSelect
              options={[
                "Select",
                "Bhuvi",
                "Gajaanan",
                "Guddi",
                "Hari",
                "Jishna",
                "Madhu",
                "Neha",
                "Rushi",
                "Suhaib",
              ]}
              label="Assigned To"
              name="assignedTo"
              value={taskData.assignedTo}
              onChange={handleChange}
            ></UCSelect>
          </div>
          {/* <div className="px-2 py-1">
            <UCButton type="button" onClick={() => handleSubmit(taskData)}>
              Add Task
            </UCButton>
          </div> */}
          <div className="px-2 py-1">
          <UCButton type="submit">Add Task</UCButton>
        </div>
        </div>
      </form>
    </>
  );
};

export default AddTask;
