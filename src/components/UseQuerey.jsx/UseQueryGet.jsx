import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

const UseQueryGet = () => {

    const { data: task, isLoading, error, refetch } = useQuery({
        queryKey: ['taskdata'],
        queryFn: async () => {
            const respone = await axios.get(`http://localhost:8888/api/tasks`);
            const result = Array.isArray(respone.data) ? respone.data : respone.data.data ?? []
            return result;
        },
        enabled: false // This prevents the query from running automatically
    })

    return (
        <>
            <div>
                <button onClick={() => refetch()}>Fetch Data</button>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error loading data</p>}
                {task?.map((getValue, keys) => (
                    <ul key={keys}>
                        <li>
                            {getValue.title}
                            {getValue.assignee}
                            {getValue.dueDate}
                            {getValue.completed}
                        </li>
                    </ul>
                ))}
            </div>

        </>
    )
}
export default UseQueryGet