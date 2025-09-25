import React, {  useEffect, useState } from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'

import { Box, Typography } from '@mui/material'
import Autoplay from 'embla-carousel-autoplay'
import projectsData from '../../assets/data/projects.json'
import { IProject } from '../../types/projectTypes'
import { Link as RouterLink } from 'react-router-dom'
useEmblaCarousel.globalOptions = { loop: true }

const ProjectCarousel: React.FC = () => {
	const [options] = useState<EmblaOptionsType>({ loop: true, align: 'center' })
	// Attach autoplay plugin with a 3s delay
	const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false })
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay])

	const projects: IProject[] = (projectsData as any).projects || []

	useEffect(() => {
		// Start autoplay when embla api is ready
		if (emblaApi) {
			// embla-carousel-autoplay plugin handles start automatically, but ensure it's enabled
			try {
				// No-op; plugin starts by default
			} catch (e) {
				// ignore
			}
		}
	}, [emblaApi])

	if (!projects || projects.length === 0) {
		return <div>No projects to show.</div>
	}

	return (
		<Box className="embla project" ref={emblaRef} sx={{ overflow: 'hidden',  margin: '0 auto', maxWidth: '800px', p:1, overflowX: 'hidden' }}>
			<Box className="embla__container projectContainer" sx={{ display: 'flex' }}>
				{projects.map((project) => (
					<Box
						key={project.shortName}
						className="embla__slide projectSlide"						
					>
						{/* If project.url exists, link to external site, else route to /projects/:shortName */}

							<RouterLink to={`/projects/${encodeURIComponent(project.shortName)}`}>
								<img src={project.image} alt={project.longName} style={{ width: '100%', borderRadius: 8 }} />
							</RouterLink>

						<Typography variant="body1" sx={{ mt: 1 }} className="projectSummary">
							{project.summary.length > 160 ? `${project.summary.slice(0, 157)}...` : project.summary}
						</Typography>

					</Box>
				))}
			</Box>
		</Box>
	)
}

export default ProjectCarousel;