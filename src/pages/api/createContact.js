import { table, getMinifiedItem } from '../../utils/Airtable';

export default async (req, res) => {
  const { contact } = req.body;
  console.log('%%', contact, req);
  try {
    const { name, email, organization, enquiry } = req.body;
    const newRecords = await table.create([
      { fields: { name, email, organization, enquiry } },
    ]);
    console.log('!!', getMinifiedItem(newRecords[0]));
    res.status(200).json(getMinifiedItem(newRecords[0]));
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Something went wrong! 😕' });
  }
};
