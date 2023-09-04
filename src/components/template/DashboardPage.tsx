import React from 'react';

const DashboardPage = ({ createdAt } : { createdAt : Date } ) => {
    return (
        <div className=' py-4 px-6 font-bold ' >
            <h3 className='text-2xl mb-2' >Hi 👋</h3>
            <p>Register your ads to be seen by thousands of people.</p>
            <div className=' mt-5 flex gap-x-3' >
                <p>Registery date:</p>
                <span className=' text-orange' >{ new Date(createdAt).toLocaleDateString() }</span>
            </div>
        </div>
    );
}
export default DashboardPage;