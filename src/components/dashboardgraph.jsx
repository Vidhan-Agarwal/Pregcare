export default function DashboardGraph({name})
{
    return (
      <div className="Dashboard__Graph">
        <h1 className="Dashboard__heading">How was your day</h1>
        <div className="Dashboard__list">
            <table>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
            </table>
      </div>  
      </div>
    );
}