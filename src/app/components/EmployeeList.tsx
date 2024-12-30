import DirectorList from "../EmployeeList/DirectorList";
import StaffList from "../EmployeeList/StaffList";
import TeacherList from "../EmployeeList/TeacherList";

export default function EmployeeListPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">ทำเนียบบุคลากร</h1>
      <DirectorList />
      <TeacherList />
      <StaffList />
    </div>
  );
}
