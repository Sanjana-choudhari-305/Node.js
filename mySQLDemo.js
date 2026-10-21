import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12301995",
    database: "nodejs"
});

connection.connect((err) => {
    if (err) {
        console.log("Database connection error:", err);
        return;
    }
    console.log("MySQL connected successfully");
});

// Get all employees
export const getAllEmployees = (req, res) => {
    connection.query("SELECT * FROM employees", (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error in getting information"
            });
        }

        res.json(result);
    });
};

// Get employee by ID
export const getEmployeeById = (req, res) => {
    let { id } = req.params;
    let sql = "SELECT * FROM emp WHERE id = ?";

    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error in getting information"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "No data found"
            });
        }

        res.json(results[0]);
    });
};

// Add new employee
export const addNewEmployee = (req, res) => {
    const newemp = req.body;
    let sql = "INSERT INTO employees VALUES (?, ?, ?)";

    connection.beginTransaction((err) => {
        if (err) {
            return res.status(500).json({
                message: "Error in transaction"
            });
        }

        connection.query(sql, Object.values(newemp), (err, results) => {
            if (err) {
                return connection.rollback(() => {
                    res.status(500).json({
                        message: "Error in adding employee"
                    });
                });
            }

            connection.commit((err) => {
                if (err) {
                    return connection.rollback(() => {
                        res.status(500).json({
                            message: "Error in transaction"
                        });
                    });
                }

                res.status(201).json({
                    message: "User added"
                });
            });
        });
    });
};

// Update employee manager
export const updateManager = (req, res) => {
    const oldemp = req.body;
    const id = oldemp.empid;
    const salary = oldemp.empsal;

    let sql = "update employees set manager = ? WHERE id = ?";

    connection.beginTransaction((err) => {
        if (err) {
            return res.status(500).json({
                message: "Error in transaction"
            });
        }

        connection.query(sql, [salary, id], (err, result) => {
            if (err) {
                return connection.rollback(() => {
                    res.status(500).json({
                        message: "Cannot update"
                    });
                });
            }

            if (result.affectedRows === 0) {
                return connection.rollback(() => {
                    res.status(404).json({
                        message: "No data found"
                    });
                });
            }

            connection.commit((err) => {
                if (err) {
                    return connection.rollback(() => {
                        res.status(500).json({
                            message: "Error in transaction"
                        });
                    });
                }

                res.json({
                    message: "Salary updated successfully"
                });
            });
        });
    });
};

// Delete employee
export const deleteEmployee = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM employees WHERE id = ?";

    connection.beginTransaction((err) => {
        if (err) {
            return res.status(500).json({
                message: "Error in starting transaction"
            });
        }

        connection.query(sql, [id], (err, result) => {
            if (err) {
                return connection.rollback(() => {
                    res.status(500).json({
                        message: "Cannot delete"
                    });
                });
            }

            if (result.affectedRows === 0) {
                return connection.rollback(() => {
                    res.status(404).json({
                        message: "Employee not found"
                    });
                });
            }

            connection.commit((err) => {
                if (err) {
                    return connection.rollback(() => {
                        res.status(500).json({
                            message: "Error in transaction"
                        });
                    });
                }

                res.json({
                    message: "Employee deleted"
                });
            });
        });
    });
};