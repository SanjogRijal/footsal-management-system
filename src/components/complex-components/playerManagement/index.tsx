import TableComponent from "./table";
import { useGetAllPlayersQuery } from "@/store/services/playersApiSlice";
import LayoutComponent from "@/components/core-components/Layouts";
import { PlayersPayloadType } from "@/store/services/types";
export default function PlayersManagementComponent() {
  const { data, isLoading, isSuccess } = useGetAllPlayersQuery(0);
  console.log(data)
  const finalData = data ? isSuccess && data?.data?.map((data: any): PlayersPayloadType => ({
    name: data?.name,
    preferredPosition: data?.preferredPosition,
    joiningDate: data?.joiningDate
  })): [];
  return isLoading ? <>...</> : <LayoutComponent calledBy="player" headingContent="Player Management System" buttonLabel="Add Player" table={<TableComponent calledBy="players" position={'relative'} top='2vh' tableHeaders={['Name', 'PreferredPosition', 'joiningDate']} tableData={finalData || []} useEdit={true}/>}/>
}