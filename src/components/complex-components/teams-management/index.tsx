import { useGetAllPlayersQuery } from "@/store/services/playersApiSlice";
import LayoutComponent from "@/components/core-components/Layouts";
import TableComponent from "../playerManagement/table";
export default function TeamsManagementComponent() {
  // const [data, setData] = useState<{ status: string, "err"?: string, data: [] }>();
  const {data, isSuccess} = useGetAllPlayersQuery(0);
  const finalData: {name: string}[] = data?.data?.map((data: any) => ({name: data.name}))
  return <LayoutComponent calledBy="team" headingContent="Teams Management System" buttonLabel="Add Team" table={<TableComponent position={'relative'} calledBy="teams" top='2vh' tableHeaders={['Name']} tableData={finalData} useEdit={true}/>}/>
}