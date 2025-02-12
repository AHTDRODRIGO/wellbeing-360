const { sequelize } = require("../../../config/database");

const addEmployee = async (req, res) => {
  try {
    const {
      name,
      nic,
      date_of_birth,
      contact_number,
      weight,
      height,
      address,
      employee_type,
      department,
      designation,
      work_location,
      active_status,
    } = req.body;

    // Construct the raw SQL query
    const query = `
      INSERT INTO employee 
      (name, nic, date_of_birth, contact_number, weight, height, address, employee_type, department, designation, work_location, active_status) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    // Execute the query with parameterized values
    await sequelize.query(query, {
      replacements: [
        name,
        nic || null,
        date_of_birth,
        contact_number,
        weight || null,
        height || null,
        address,
        employee_type,
        department,
        designation,
        work_location,
        active_status !== undefined ? active_status : true, // Default to active
      ],
    });

    return res.status(200).json({ message: "Employee added successfully" });
  } catch (error) {
    console.error("Error adding employee:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addEmployee };
