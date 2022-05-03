import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {selectTestData} from "./store/selectors/initial";
import {getTestInfo} from "./store/actions/initial";

function App() {
    const dispatch = useDispatch();
    const selectInitialData = useSelector(selectTestData);

    useEffect(() => {
        dispatch(getTestInfo());
    }, []);

    return (
        <div>
            <div>
                ИНИТ :Х
            </div>
            <div>
                {JSON.stringify(selectInitialData)}
            </div>
        </div>
    );
}

export default App;
