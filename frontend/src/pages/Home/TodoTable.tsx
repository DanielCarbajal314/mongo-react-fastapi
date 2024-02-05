import { Table, Button } from "antd";
import { TodoItem } from "./useTodoHooks";

export function TodoTable({dataSource, onDeleteClicked } : { dataSource: TodoItem[], onDeleteClicked: (todo:TodoItem) => void }){
    const columns = [        
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Actions',
          render: (todo:TodoItem) => <div>
            <Button danger onClick={() => onDeleteClicked(todo)}>Delete</Button>
          </div>
        }
    ];
    return <Table {...{columns, dataSource, rowKey:"id"}}/>
}