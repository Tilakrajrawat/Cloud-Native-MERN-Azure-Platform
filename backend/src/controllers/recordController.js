import Record from "../models/Record.js";
import { logger } from "../utils/logger.js";

export const getRecords = async (req, res, next) => {
  try {
    const records = await Record.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(records);
  } catch (err) {
    next(err);
  }
};

export const createRecord = async (req, res, next) => {
  try {
    const { title, content, metadata } = req.body;
    const record = await Record.create({ userId: req.user.id, title, content, metadata });
    logger.trackEvent("record_created", { userId: req.user.id, recordId: record._id.toString() });
    res.status(201).json(record);
  } catch (err) {
    next(err);
  }
};

export const updateRecord = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, metadata } = req.body;
    const record = await Record.findOneAndUpdate({ _id: id, userId: req.user.id }, { title, content, metadata }, { new: true });
    if (!record) return res.status(404).json({ message: "Record not found" });
    logger.trackEvent("record_updated", { userId: req.user.id, recordId: record._id.toString() });
    res.json(record);
  } catch (err) {
    next(err);
  }
};

export const deleteRecord = async (req, res, next) => {
  try {
    const { id } = req.params;
    const record = await Record.findOneAndDelete({ _id: id, userId: req.user.id });
    if (!record) return res.status(404).json({ message: "Record not found" });
    logger.trackEvent("record_deleted", { userId: req.user.id, recordId: record._id.toString() });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
