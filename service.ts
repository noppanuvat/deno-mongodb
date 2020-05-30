import { collection } from "./mongodb.ts";

const findAllData = async () => {
  const data = await collection.find();

  return data;
};

const createData = async (data: any) => {
  const now = new Date();
  data.createDate = now;
  data.updateDate = now;

  const id = await collection.insertOne(data);
  const resp = {
    id: id.$oid,
    message: "create success",
  };
  return resp;
};

const updateData = async (id: any, data: any) => {
	data.updateDate = new Date();

  const { modifiedCount } = await collection.updateOne(
    { _id: { $oid: id } },
    { $set: data },
  );
  const resp = {
    id,
    message: modifiedCount > 0 ? "update success" : "update fail",
  };
  return resp;
};

const deleteData = async (id: any) => {
  const deleteCount = await collection.deleteOne({ _id: { $oid: id } });
  const resp = {
    id,
    message: deleteCount > 0 ? "delete success" : "delete fail",
  };
  return resp;
};

export { findAllData, createData, updateData, deleteData };
