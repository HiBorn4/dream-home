import { RequestHandler } from "express";
import { DB } from "../db/db";
import { IError } from "../types/basic/IError";
export const createProperty: RequestHandler = async (req, res, next) => {
	try {
		const {
			type,
			rooms,
			rent,
			ownerid,
			propertyaddress,
			city,
			branchnumber,
			staffid,
		} = req.body;
		await DB.query(
			`INSERT INTO Property (type, rooms, rent, OwnerID, PropertyAddress, City, BranchNumber, StaffID) VALUES ('${type}', '${rooms}', ${rent}, ${ownerid}, '${propertyaddress}', '${city}', ${branchnumber}, ${staffid})`,
		);
		res.status(200).json({ message: "Property created" });
	} catch (error) {
		next(new IError("Error creating property", 500, "createProperty"));
	}
};

export const createBranch: RequestHandler = async (req, res, next) => {
	try {
		const {
			branchaddress,
			city,
			managerid,
			telephonenumber,
			managerstartdate,
			managerbonus,
		} = req.body;

		await DB.query(
			`INSERT INTO BranchOffice ( BranchAddress, City, ManagerID, TelephoneNumber, ManagerStartDate, ManagerBonus) VALUES ( '${branchaddress}', '${city}', ${managerid}, '${telephonenumber}', '${managerstartdate}', ${managerbonus})`,
		);
		res.status(200).json({ message: "Branch created" });
	} catch (error) {
		next(new IError("Error creating branch", 500, "createBranch"));
	}
};

export const createLease: RequestHandler = async (req, res, next) => {
	try {
		const {
			propertyid,
			leasestartdate,
			leaseenddate,
			leasestatus,
			leaserent,
		} = req.body;
		await DB.query(
			`INSERT INTO Lease ( PropertyID, LeaseStartDate, LeaseEndDate, LeaseStatus, LeaseRent) VALUES (${propertyid}, '${leasestartdate}', '${leaseenddate}', ${leasestatus}, ${leaserent})`,
		);
		res.status(200).json({ message: "Lease created" });
	} catch (error) {
		next(new IError("Error creating lease", 500, "createLease"));
	}
};
