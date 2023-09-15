import * as Yup from "yup";

export const userSchema = Yup.object().shape({
    favegroup: Yup.string().required(),
    bias: Yup.string().required(),
    biaswrecker: Yup.string().required(),
    favealbum: Yup.string().required(),
    favett: Yup.string().required(),
    favebside: Yup.string().required(),
    faveera: Yup.string().required(),
    favecomeback: Yup.string().required()

});