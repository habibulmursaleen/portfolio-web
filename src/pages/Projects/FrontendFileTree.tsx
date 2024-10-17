import { File, Folder, Tree } from "@/components/ui/file-tree";

export default function FrontendFileTree() {
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
        ]}
        elements={ELEMENTS}
      >
        <Folder element="src" value="1">
          <Folder value="28" element="__tests__">
            <File value="29">
              <p>testExample.ts</p>
            </File>
          </Folder>
          <Folder value="2" element="app">
            <File value="3">
              <p>store.ts</p>
            </File>
          </Folder>
          <Folder value="4" element="assets">
            <File value="5">
              <p>logo.svg</p>
            </File>
          </Folder>
          <Folder value="6" element="components">
            <Folder value="7" element="ui">
              <File value="8">
                <p>Button.tsx</p>
              </File>
              <File value="9">
                <p>Dropdown.tsx</p>
              </File>
            </Folder>
            <Folder value="10" element="layout">
              <File value="11">
                <p>Mainlayout.tsx</p>
              </File>
              <File value="12">
                <p>Routes.tsx</p>
              </File>
            </Folder>
          </Folder>
          <Folder value="13" element="features">
            <Folder value="14" element="api">
              <File value="15">
                <p>apislice.ts</p>
              </File>
            </Folder>
            <Folder value="16" element="dataSlice">
              <File value="17">
                <p>dataSlice.ts</p>
              </File>
              <File value="18">
                <p>dataFilterSlice.ts</p>
              </File>
            </Folder>
          </Folder>
          <Folder value="19" element="hooks">
            <File value="20">
              <p>useAuth.ts</p>
            </File>
          </Folder>
          <Folder value="21" element="pages">
            <Folder value="22" element="Home">
              <File value="23">
                <p>Home.tsx</p>
              </File>
            </Folder>
            <Folder value="24" element="Dashboard">
              <File value="25">
                <p>dashboard.tsx</p>
              </File>
            </Folder>
          </Folder>
          <Folder value="26" element="lib">
            <File value="27">
              <p>utils.ts</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];
