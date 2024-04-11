const keep = require('../model/keepSchema');

const getAllList = async (req, res) => {
    const keepList = await keep.find({}).sort({ createdAt: -1 });
    return res.status(200).json(keepList);
};

const createList = async (req, res) => {
    const { task } = req.body;
    try {
        const keepList = await keep.create({ task });
        return res.status(200).json(keepList);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const findInList = async (req, res) => {
    const { id } = req.params;
    try {
        const keepList = await keep.findById(id);
        if (!keepList) {
            return res.status(500).json({
                error: "id does not exist"
            });
        } else {
            return res.status(200).json(keepList);
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateList = async (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    try {
        const updatedList = await keep.findByIdAndUpdate(id, { task }, { new: true });

        if (!updatedList) {
            return res.status(404).json({
                error: "Item not found"
            });
        }

        return res.status(200).json(updatedList);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
const deleteinList = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedItem = await keep.deleteOne({ _id: id });
        if (deletedItem.deletedCount === 0) {
            return res.status(404).json({
                error: "Item not found"
            });
        } else {
            return res.status(200).json({
                message: "Item deleted successfully"
            });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = { getAllList, createList, findInList, updateList,deleteinList };
