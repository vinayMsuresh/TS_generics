interface FormProps <T> {
    values: T;
    children: (values : T) => JSX.Element;
}

const Form = <T extends {}>({values, children}:FormProps<T>) => {
    return children(values);
}


const Main: React.FC = () => {
    return(
        <>
            <Form<{name: string}> values={{name:'Vinay'}}>
            {(values) =>( <div>{values.name}</div>)}
            </Form>
        </>
    )
}

export default Main;