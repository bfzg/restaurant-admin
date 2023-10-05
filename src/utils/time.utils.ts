import moment from 'moment'

export function specificDateTime(time:string | number){
    return moment(time).format('YYYY-MM-DD HH:mm:ss');
} 