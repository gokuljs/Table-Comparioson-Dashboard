import { Grid } from "@mui/material";
import React, { Dispatch, useState } from "react";
import { CustomDialogModal } from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import uuid from "react-uuid";
import { DummyDatasetProps } from "../../Pages/Dashboard/types";
import { defaultDummyData, DEFAULT_IMAGE_STRING } from "./utils";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

type inputArrayProps = {
  title: string;
  msg: string;
  default?: string;
  optionalText?: string;
};

function DialogModal({
  open,
  handleClose,
  setDummyDataSet,
  dummyDataSet,
}: {
  open: boolean;
  handleClose: () => void;
  dummyDataSet: DummyDatasetProps[];
  setDummyDataSet: Dispatch<DummyDatasetProps[]>;
}) {
  const [useDefaultData, setUseDefaultData] = useState(defaultDummyData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data: any) => {
    const formData: DummyDatasetProps = {
      id: uuid(),
      image: data?.image,
      title: data?.title,
      overallScore: Math.floor(Math.random() * 10 + 1),
      productDescription: data?.productDescription,
      fundingHistory: {
        funding: data?.funding,
        history: {
          founded: data?.founded,
          keyInvestors: data?.keyInvestors,
          founders: data?.founders,
        },
      },
    };
    setDummyDataSet([...dummyDataSet, formData]);
    reset();
    handleClose();
  };

  const inputArray: inputArrayProps[] = [
    {
      title: "image",
      msg: "Please enter image url",
      default: DEFAULT_IMAGE_STRING,
      optionalText:
        "There is a default image URL,but if you want to replace it with another image, Please do so",
    },
    { title: "title", msg: "Please enter your company info" },
    { title: "productDescription", msg: "Please enter product description" },
    { title: "funding", msg: "Please enter total funding raised" },
    { title: "founded", msg: "Please enter when it was founded" },
    { title: "keyInvestors", msg: "Please enter the keyInvestors" },
    { title: "founders", msg: "Please enter the founders" },
  ];

  return (
    <CustomDialogModal open={open} maxWidth="md" fullWidth>
      <Grid container className="wrapper" lg={12}>
        <Grid container lg={12} display="flex" justifyContent="flex-end">
          <CloseIcon className="close-icon" onClick={() => handleClose()} />
        </Grid>
        <Grid
          container
          lg={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            {Array.isArray(inputArray) &&
              inputArray.length > 0 &&
              inputArray.map((value) => (
                <>
                  <input
                    title={value?.optionalText}
                    className="textField"
                    defaultValue={value?.default ?? ""}
                    placeholder={`${value.msg}`}
                    {...register(`${value.title}`, {
                      required: `${value.msg}`,
                    })}
                  />
                  {value?.optionalText && (
                    <p className="optionalText">
                      <InfoOutlinedIcon className="infoIcon" />{" "}
                      {value?.optionalText}
                    </p>
                  )}
                  <ErrorMessage
                    errors={errors}
                    name={`${value.title}`}
                    render={({ message }) => (
                      <p className="err-msg">{message}</p>
                    )}
                  />
                </>
              ))}
            <Grid lg={12} display="flex" justifyContent="space-evenly">
              <button
                className="submit-button"
                type="button"
                onClick={() => {
                  setDummyDataSet([...dummyDataSet, useDefaultData]);
                  setUseDefaultData({ ...useDefaultData, id: uuid() });
                  reset();
                  handleClose();
                }}
              >
                use default data
              </button>
              <input className="submit-button" type="submit" />
            </Grid>
          </form>
        </Grid>
      </Grid>
    </CustomDialogModal>
  );
}

export default DialogModal;
