import React  from 'react';
import { TimelineCard } from './TimelineCard';
import { HorizontalTimeline } from 'react-horizontal-timeline';
import { resumeData } from '../../util/resumeData';

export const Timeline = () => {

  return (
    <section className="timeline">
        {/* {techData.map(data => 
            (
                <TimelineCard 
                    key=
                    type={data.type} 
                    logo={data.logo} 
                    summary={data.summary}
                    stack={data.stack}
                />
            )
        )} */}
    </section>
  );
};
