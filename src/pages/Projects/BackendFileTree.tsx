import { File, Folder, Tree } from "@/components/ui/file-tree";

export default function BackendFileTree() {
  return (
    <div className="relative flex h-[300px] flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Tree
        className="p-2 overflow-hidden rounded-md bg-background"
        initialSelectedId="7"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
        ]}
      >
        <Folder value="1" element="tests">
          <File value="2">
            <p>testExample.ts</p>
          </File>
        </Folder>
        <Folder element="src" value="3">
          <Folder element="API" value="4">
            <Folder value="5" element="Controllers">
              <File value="6">
                <p>ProjectsController.cs</p>
              </File>
            </Folder>
            <Folder value="7" element="DTOs">
              <File value="8">
                <p>ProjectDto.cs</p>
              </File>
              <File value="9">
                <p>CreateProjectDto.cs</p>
              </File>
            </Folder>
          </Folder>
          <Folder element="Application" value="10">
            <Folder value="11" element="Interfaces">
              <File value="12">
                <p>IOrderService.cs</p>
              </File>
              <File value="13">
                <p>IOrderRepository.cs</p>
              </File>
            </Folder>
            <Folder value="14" element="Services">
              <Folder value="15" element="Queries">
                <File value="16">
                  <p>ProjectService.cs</p>
                </File>
              </Folder>
              <Folder value="17" element="Commands">
                <File value="18">
                  <p>ProjectService.cs</p>
                </File>
              </Folder>
            </Folder>
          </Folder>

          <Folder element="Domain" value="19">
            <Folder value="20" element="Entities">
              <File value="21">
                <p>Project.cs</p>
              </File>
            </Folder>
            <Folder value="22" element="Enums"></Folder>
            <Folder value="23" element="ValueObjects"></Folder>
            <Folder value="24" element="Events"></Folder>
          </Folder>

          <Folder element="Infrastructure" value="25">
            <Folder value="26" element="Repositories">
              <File value="27">
                <p>ProjectRepository.cs</p>
              </File>
            </Folder>
            <Folder value="27" element="DataContext"></Folder>
            <Folder value="29" element="Services">
              <File value="30">
                <p>ProjectService.cs</p>
              </File>
            </Folder>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}
