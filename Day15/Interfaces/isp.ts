interface IEmployeeReportBAL {
    GeneratePFReport(): void;
    GenerateESICReport(): void;
}
interface IManagerReportBAL extends IEmployeeReportBAL {
    GenerateResourcePerformanceReport(): void;
    GenerateProjectSchedule(): void;
}
interface IAdminReportBAL extends IManagerReportBAL {
    GenerateProfitReport(): void;
}

class ReportBAL implements IAdminReportBAL {
    GenerateProfitReport(): void {
        throw new Error("Method not implemented.");
    }
    GenerateResourcePerformanceReport(): void {
        throw new Error("Method not implemented.");
    }
    GenerateProjectSchedule(): void {
        throw new Error("Method not implemented.");
    }
    GeneratePFReport(): void {
        throw new Error("Method not implemented.");
    }
    GenerateESICReport(): void {
        throw new Error("Method not implemented.");
    }

}

//Interface segregation principle at work 
let objEmpBAL: IEmployeeReportBAL;
objEmpBAL = new ReportBAL();
objEmpBAL.GenerateESICReport();
objEmpBAL.GeneratePFReport();

let objManagerBAL: IManagerReportBAL;
objManagerBAL = new ReportBAL();
objManagerBAL.GenerateESICReport();
objManagerBAL.GeneratePFReport();
objManagerBAL.GenerateProjectSchedule();
objManagerBAL.GenerateResourcePerformanceReport();


