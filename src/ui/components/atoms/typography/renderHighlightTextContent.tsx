import React from 'react';

type HighlightItem = {
    startIndex: number;
    endIndex: number;
    text: string;
    replaceText?: (text: string, index: number) => React.ReactNode;
};

export type RichTextPattern = {
    start: string;
    end: string;
    renderText: (text: string, key: number) => React.ReactNode;
};

export const defaultRichTextPatterns: RichTextPattern[] = [
    {
        start: '<em>',
        end: '</em>',
        renderText: (text, key) => <strong key={key}>{text}</strong>,
    },
];

export const renderHighlightTextContent = (text: string, patterns = defaultRichTextPatterns): React.ReactNode => {
    // Create union regexp with all pattern, example : (<em>)(.*?)(</em>)|(<red>)(.*?)(</red>)
    const highlightsRegExp = new RegExp(
        patterns.map((pattern) => `(${pattern.start})(.*?)(${pattern.end})`).join('|'),
        'gi',
    );

    // Create replace regexp to trim rich text tags like <em></em> from display text
    const replaceRegExp = new RegExp(patterns.map((pattern) => `(${pattern.start})|(${pattern.end})`).join('|'), 'gi');

    let match = highlightsRegExp.exec(text);
    const highlights: HighlightItem[] = [];

    while (match !== null) {
        const currentMatch = match;
        const startIndex = currentMatch.index;
        const endIndex = currentMatch.index + currentMatch[0].length;
        const renderer = patterns.find((it) => currentMatch[0].startsWith(it.start))?.renderText;

        highlights.push({
            startIndex,
            endIndex,
            text: text.substring(startIndex, endIndex),
            replaceText: renderer,
        });
        match = highlightsRegExp.exec(text);
    }

    let lastIndex = 0;
    const result: React.ReactNode[] = [];

    highlights.forEach((highlight, key) => {
        if (highlight.startIndex > lastIndex) {
            result.push(text.substring(lastIndex, highlight.startIndex));
        }

        result.push(highlight.replaceText?.(highlight.text.replace(replaceRegExp, ''), key));

        lastIndex = highlight.endIndex;
    });

    if (lastIndex < text.length) {
        result.push(text.substring(lastIndex));
    }

    return result;
};
