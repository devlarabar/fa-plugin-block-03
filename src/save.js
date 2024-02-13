/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
    const {
        attributes: {
            name,
            link,
            mediaID,
            mediaURL
        },
    } = props;

    const blockProps = useBlockProps.save({
        className: "fa-03-image-container"
    });
    return (
        mediaURL ? (
            <div {...blockProps} style={{ backgroundImage: `url(${mediaURL})` }}>
                <div class="artist-info">{link ? <a href={link} target="_blank">{name}</a> : name}</div>
            </div>
        ) :
            <div {...blockProps}>
                <div class="artist-info">{link ? <a href={link} target="_blank">{name}</a> : name}</div>
            </div>
    );
};

export default Save;
