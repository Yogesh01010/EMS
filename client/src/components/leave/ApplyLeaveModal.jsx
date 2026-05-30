import { CalendarIcon, FileText, X } from 'lucide-react';
import React, { useState } from 'react'

const ApplyLeaveModal = ({open, onClose, onSuccess }) => {

    const [loading, setLoading] = useState(false);

    const today = new Date();
    const tommorrow = new Date(today)
    tommorrow.setDate(today.getDate()+1);
    const minDate = tommorrow.toISOString().split('T')[0];

    const handleSubmit = async(e)=>{
        e.preventDefault();
    }

    if(!open) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm' onClick={onClose}>
        <div className='relative bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-fade-in' onClick={(e)=>e.stopPropagation()}>
            {/* Header  */}
            <div className='flex items-center justify-between p-6 pb-0'>
                <div>
                    <h2 className='text-lg font-semibold text-slate-800'>Apply for Leave</h2>
                    <p className='text-sm text-slate-400 mt-0.5'>Submit your leave request for approval</p>
                </div>
                <button onClick={onClose} className='p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600'>
                    <X className='w-5 h-5'/>
                </button>
            </div>

            {/* Form  */}
            <form onSubmit={handleSubmit} className='p-6 space-y-5'>
                {/* leave type  */}
                <div>
                    <label className='flex items-center gap-2 text-sm font-medium text-slate-700 mb-2'>
                        <FileText className='w-4 h-4 text-slate-400'/>
                        Leave Type
                        <select name="type" required>
                            <option value="SICK">Sick Leave</option>
                            <option value="CASUAL">Casual Leave</option>
                            <option value="ANNUAL">Annual Leave</option>
                        </select>
                    </label>
                </div>

                {/* duration  */}
                <div>
                    <label className='flex items-center gap-2 text-sm font-medium text-slate-700 mb-2'>
                        <CalendarIcon className='w-4 h-4 text-slate-400'/>
                       Duration
                    </label>
                </div>
                {/* reason  */}
                {/* button  */}
            </form>
        </div>
    </div>
  )
}

export default ApplyLeaveModal